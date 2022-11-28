---
title: Specification
---

<!-- TODO: Add spec history -->

This document describes `v1.0.0` of the spec, if you are looking for another version.
Check \[TODO\]

## 1. Conventions

1. A Server ( Connect Server Node ) is `S`
2. A Client ( User who uses the Connect website or Desktop app ) is `C`
3. Rooms are a group of clients, they will be refered to as `R`
4. A Bot ( An automated client ) is `B`

## 2. Encryption

Connect will use `libsignal-client` for encryption

## 3. Messages

Messages are packs of user generated content sent to and from the server and `R`s

### 3.1. `C` to `S` - `C` Side

```ts
// Message is markdown instead HTML as that exposes an XSS vunribility.
function send(room: id, message: markdown) {
	const M = Encrypt(message, PublicKey);
	if (!isAuthorizedToSendToThisRoom(user, room)) return;
	Socket.emit("message", M, room, user);
}
```

### 3.2. `S` to `R` - `S` Side

```ts
Socket.on("message", (M: encrypedData, room: id, sender: User) => {
	Socket.brodcast(room, "message", M, sender);
});
```

### 3.3. `C` to frontend

```ts
Socket.on("message", (M: encrypedData, sender: User) => {
	displayMessage(Decrypt(M), sender);
});
```

Rooms as referred to as a variable named `room` are a uniqe identifier for a `R`

### 4. Chat, Room, and Messages

Chats are the building block for Connect. Any user can create a Chat.
The maximum amount of Chats a user can create is 5.

A user can join an unlimited amount of chats as long as those chats exist and the owner's accounts exist.

Chats can contain rooms.
The maximum limit for # of rooms is 20.
Rooms exist forever as long as the chat exists.

Rooms contain messages.
Messages contain user generated content that is transfered as described in [3](#3-messages).
Messages are made of a limited version of markdown, it has:

-   No headings
-   No HTML
-   Links that represent the URL to prevent scams

### 4.1 IDs

Chat IDs are an incrementing value
Room IDs are `[chatID]-[incrementingValue]`
Message IDs are `[roomID]-[incrementingValue]`

## 5 API

There are 3 APIs that Connect has:

-   App API
-   User API
-   Bot API

The App API is used in the desktop app to:

-   Control window state
-   Save configurations
-   Load & Set themes.

In the web app, it is used for:

-   Saving configurations
-   Loading and setting themes

The User API is used to do anything on Connect a user could including:

-   Sending, Recieving, Editing and Deleting Messages
-   Creating Rooms
-   Creating Chats
-   Editing their profile

The Bot API is used to do the following with a bot account:

-   Send, Recieve, Edit and Delete Messages
-   Recive and post data from API's into Rooms
-   Run user specified commands on **non connect servers**
