---
title: "TryHackMe OhSINT Writeup"
author: "Nisarga"
date: '2024-07-04'
tag: TryHackMe
description: TryHackMe OhSINT room writeup
---


**What is OSINT?**

> OSINT (Open Source Intelligence) involves collecting and analyzing publicly available information from sources like publications, media, websites, social media, and government reports to support decision-making in fields like national security and business intelligence.


OhSINT TryHackMe Room: https://tryhackme.com/r/room/ohsint

This room is all about getting information about an user from just an image. This is a pretty simple, easy & straightforward room.

We are given this image:

![target image](https://i.imgur.com/YYwcglR.png)

windows XP memories, sigh.

**Question 1:**  What is the user's avatar of?
![q1](https://i.imgur.com/Qnn2AAl.png)

To solve this, we need to extract information from the image we were provided.

Images have metadata (text information related to the image) embedded in them. We'll use this metadata to find the info we need. To extract the EXIF/metadata from the image we will use [exiftool](https://github.com/exiftool/exiftool). You can install EXIF tool by simply running:
```shell
sudo apt install exiftool
```
The installation command depends on your system, if you're on Arch Linux you'll have to run this:
```shell
sudo pacman -S perl-image-exiftool
```

> Alternative Tools or Services you can use:
> - https://exifdata.com
> - https://www.metadata2go.com
> - https://github.com/d2phap/ExifGlass


After you have successfully installed exiftool, run this command to get the required information about the image:

```shell
exiftool image.jpg
```
> note: i assumed that you have saved the file with the name "image.jpg"

This is the output
```
➜ Downloads exiftool image.jpg  
ExifTool Version Number : 12.76  
File Name : image.jpg  
Directory : .  
File Size : 234 kB  
File Modification Date/Time : 2024:07:04 09:53:31+05:30  
File Access Date/Time : 2024:07:04 09:53:32+05:30  
File Inode Change Date/Time : 2024:07:04 09:53:31+05:30  
File Permissions : -rw-r--r--  
File Type : JPEG  
File Type Extension : jpg  
MIME Type : image/jpeg  
XMP Toolkit : Image::ExifTool 11.27  
GPS Latitude : 54 deg 17' 41.27" N  
GPS Longitude : 2 deg 15' 1.33" W  
Copyright : OWoodflint  
Image Width : 1920  
Image Height : 1080  
Encoding Process : Baseline DCT, Huffman coding  
Bits Per Sample : 8  
Color Components : 3  
Y Cb Cr Sub Sampling : YCbCr4:2:0 (2 2)  
Image Size : 1920x1080  
Megapixels : 2.1  
GPS Latitude Ref : North  
GPS Longitude Ref : West  
GPS Position : 54 deg 17' 41.27" N, 2 deg 15' 1.33" W
```

We can see the image belongs to `OWoodflint` by observing the copyright field. 

We'll now use Google to find some info about this person:

![img](https://i.imgur.com/fY7iInz.png)

We have found the links to their [X/twitter](https://twitter.com/owoodflint?lang=en),  [GitHub](https://github.com/OWoodfl1nt) & [Blog](https://oliverwoodflint.wordpress.com/author/owoodflint/).

It seems like they are using an avatar of a cat on Twitter.

![twitter](https://i.imgur.com/thvpKsa.png)

We have the answer to our first question, cat.

**Answer 1:** Cat

**Question 2:** What city is this person in?

We can see a tweet by the person where they are sharing their WiFi BSSID.

![bssid](https://i.imgur.com/QH5mOEA.png)

We'll use a site called https://wigle.net to gather info about the WiFi network.

You'll need to sign up for an account on the website.

Then navigate to View > Search > Advanced Search (https://wigle.net/search)

![](https://i.imgur.com/Hn2tzYw.png)

Now copy the BSSID you have from the tweet and paste it in the BSSID/MAC field of the search tool and hit the query button.

![](https://i.imgur.com/5vFAVlH.png)

We have a matching result. Now click on "map".

We can see the network is located in London:

![](https://i.imgur.com/YBCmREy.png)

We have our second answer, London.

**Answer 2:** London

**Question 3: What is the SSID of the WAP he connected to?**

We found the SSID of the WAP by our wigle search.

![](https://i.imgur.com/x6QmTrF.png)
**Answer 3:** UnileverWiFi



**Question 4:** What is his personal email address?
Readme of a repository on the user's GitHub profile has his email address:

![](https://i.imgur.com/0UK5bNi.png)

**Answer 4:** OWoodflint@gmail.com

**Question 5:** What site did you find his email address on?

We found the user's email on GitHub.

**Answer 5:** GitHub

**Question 6:** Where has he gone on holiday?

We can check the user's [wordpress blog](https://oliverwoodflint.wordpress.com/) and find that the user has went to New York on holiday.
![](https://i.imgur.com/qAfGcYk.png)

**Question 7:** What is the person's password?

If we observe the site's source code closely we will be able to find this:

![](https://i.imgur.com/unFaF8d.png)

**Answer 7:** pennYDr0pper

That's it, the room is complete now.
