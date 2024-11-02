---
title: "How I hacked an ARG/Cryptic Hunt site"
author: "Nisarga"
date: '2023-10-03'
categories:
  - cybersecurity 
tags:
  - backend
  - cybersecurity
  - pentesting
slug: how-i-hacked-an-arg-site
---

A friend of mine was organizing an ARG/Cryptic Hunt competition for his school's techfest/competition. He built the site/platform where the competition was being hosted all by himself. But it was buggy, really buggy and had a lot of vulnerabilities.

Here are the mistakes he did which made his ARG website hackable and vulnerable :  
  
1. Not using an **actual backend & some other stupid mistakes :** Yep, he didn't use an actual backend for the site. When I was asked to pentest the site he created, I opened the network tab of my browser's dev tools and I found out that the site was calling the answers from a JS file. The answers were in total plaintext in the JS file. I could see them clearly. He didn't even hash the answers. I informed him about this "severe" vulnerability through Discord 5 minutes before the competition started.

      ![answers](https://i.imgur.com/2umc2lW.png)


2. **Poor security :** The way he called data from his firebase DB about the players and stuff revealed the list of players, their e-mails & e-mails of their teammates. Within a minute I had the email address of all the players. I also figured out a way to use an exploit to write to his DB and manipulate the leaderboard of the competition.

![security](https://i.imgur.com/M6pn6p2.png)

**What did the developer do?**  
The developer of the site (a friend of mine) tried to do damage-control.  
**Fix 1 (gone wrong) :**  
He used some ciphers to cipher the answers which were visible in the JS file mid-competition. This is when he made his next mistake.  
Some guy on Discord leaked the ciphers which were used to cipher the answers making the answers decipherable.

**Fix 2**

He used [bcrypt](https://www.npmjs.com/package/bcryptjs) to hash the answers which was a temporary easy fix.

~~~javascript 
const bcrypt = require('bcrypt');

const storedSalt = "$2a$10$iwkIBgVZDdADUSLFewMBJu"; // random value, can be exposed
const storedHash = '$2a$10$iwkIBgVZDdADUSLFewMBJu86oEYjRnnxUR9Nli2pfeQyRaIzr5kMS'; // hashing the password with storedSalt,
// this can be exposed in your js and it's fine

const userPassword = getPassword();
const generatedHash = bcrypt.hashSync(userPassword, storedSalt);

if (generatedHash === storedHash) {
  console.log('Password is correct.'); // will return this since the hashes match, since same salt
} else {
  console.log('Password is incorrect.');
}
~~~ 


**What else could've been done with the website/platform?**

If someone wanted to totally screw up the platform/site they could just write a script to constantly keep requesting the firestore db until he runs out cause he used that instead of mongo or something local.

You can read the developer's official statement about the incident [here in his blog](https://namishh.me/blog/how-to-not-make-quiz/).

[**-** ni5arga](https://github.com/ni5arga) ([website](https://nisarga.me) | [twitter](https://twitter.com/ni5arga) | [github](https://github.com/ni5arga))
