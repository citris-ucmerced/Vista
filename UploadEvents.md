# How to Upload Events

## Introduction

This guide explains how to upload events to the Vista website using a CSV file. You will learn how to format the CSV file, upload image files, add links, and upload flyers.

## CSV File Format


The CSV file should have the following headers(Underlined columns are required):

- <ins>id</ins>: Unique identifier that is used to route to the event. For example, an id of `potluck_2023` would have a route of `https://vista.ucmerced.edu/events/potluck_2023`.

- <ins>title</ins>: Title of the event.

- <ins>start</ins>: Start date in format MM/DD/YYYY.

- <ins>end</ins>: End date in format MM/DD/YYYY.

- <ins>location</ins>: Name of location where event takes place.

- time: Time that event starts in format HH:MM:SS AM/PM.

- <ins>summary</ins>: Quick summary of event.

- <ins>description</ins>: Detailed description of event.

- <ins>urlSafeTitle</ins>: Remove any special characters and replace spaces with "-".

- tags: Static tags to be added to event.

- coverImageFile: Image file that will show up next to event in Events page. Upload image into `public/images/events` and place name of file in this column. For example, if you have a file named `group_photo_potluck_2023.jpg`, then you would upload the file to the `public/images/events` folder and then specify the file (`group_photo_potluck_2023.jpg`) in this column. If no file is given, then a default image is used, which is also located in that same folder.

- imageFiles: List of image files that will be placed in an image carousel. Image files should be placed in the `public/images/events` folder. Multiple image files need to be separated by a comma (,) to distinguish between files. For example, if you have three files named `1.jpg`, `2.jpg`, and `3.jpg`, then you would upload all three images into the `public/images/events` folder. Then you would copy their names into this column to render them in an image carousel as `1.jpg, 2.jpg, 3.jpg`.

- iframeSrc: Source to an iFrame. Used for uploading forms.

- links: Links to additional sources. Links are parsed as `[Description]"source"`. Multiple links are separated by a comma (,). For example, if you have one link, then you would just specify `[Example]"https://example.com/"`. If you have multiple links, then you would write `[Example1]"https://example.com/", [Example2]"https://example.com/", [Example3]"https://example.com/"`.

## Image Files

To upload an image file, follow these steps:

1. Save the image file to the `public/images/events` folder.

2. In the CSV file, specify the name of the image file in the `coverImageFile` or `imageFiles` column.

## Links

To add a link, follow these steps:

1. In the CSV file, specify the link in the `links` column as `[Description]"source"`.

2. If you have multiple links, separate them with a comma (,).

## Flyers

To upload a flyer, follow these steps:

1. Save the cover image file to the `public/flyers` folder.

2. Save the PDF file to the `public/flyers` folder.

3. In the CSV file, specify the name of the cover image file in the `flyerCoverFile` column and the name of the PDF file in the `flyerPdf` column.
