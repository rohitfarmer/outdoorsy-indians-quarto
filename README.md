# Outdoorsy Indians

Website code for https://outdoorsyindians.com

## General Posts Template

``` yaml
---
title: "A Beginner's Guide to Camping"
description: "An easy-to-follow guide to types of camping with details on the beginner’s friendly car tent camping."
categories: [Camping, Types of Camping,  Car Tent Camping, Beginner]
author: 
  - name: "Rohit Farmer"
date: "2023-09-06"
date-modified: last-modified
---

![Banner image caption](banner-image.jpg){.preview-image fit-alt="Banner image alt text"}

Featured image size: 1200px X 628px 
In post image size: 600 - 800px in width
```

## Convert JPG to WebP

It requires latest version of [ImageMagick](https://imagemagick.org/)

```bash
magick mogrify -resize 1200x -quality 80 -format webp *.jpg
```