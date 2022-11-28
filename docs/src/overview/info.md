# General Information

This is a high level overview of the two expedition websites and their components.

## The main XBGE website

URL: [https://expedition-grundeinkommen.de/](https://expedition-grundeinkommen.de/)\
CMS: [https://directus.expedition-grundeinkommen.de/](https://directus.expedition-grundeinkommen.de/)\
Design: Schauschau

## The Berlin campaign website

URL: [https://www.volksentscheid-grundeinkommen.de/](https://www.volksentscheid-grundeinkommen.de/)\
CMS: [https://www.directus.volksentscheid-grundeinkommen.de//](https://www.directus.volksentscheid-grundeinkommen.de/)\
Design: Auf Sie Mit Gebrüll!

## Code

Both websites use the same codebase, but take data from different directus instances (See 'Directus').

## History

The main XBGE website was the first site that was built for the organisation. It used to be written in Gatsby, with Wordpress integration for the blog and with Contentful as a CMS. The contentful space still exists and can be found here: [Contentful Space](https://app.contentful.com/spaces/af08tobnb0cl/entries). The old gatsby repo also still exists: [Gatsby](https://github.com/grundeinkommensbuero/website-gatsby)\
\
In 2022, we made the switch to Next.js and changed the CMS to Directus. We also launched the Berlin campaign website. The new website repo can be found here: [Next.js repo](https://github.com/grundeinkommensbuero/website-next)

## Components

The website has a number of interactive components that were created at varying times for several different campaigns. Not all of them are currently in use.

### Hero

A simple hero section with a large background image and a slight zoom. Currently in use on both the XBGE and Berlin websites. Can be edited via Directus.

### News section

Basically a section of three images with corresponding texts. Currently in use only on the XBGE website, directly below the hero, but has been used on the Berlin site in the past. Can be edited via Directus.

### News banner

A banner that appears on top of the whole screen. Could be used for announcements, but hasn't been used in a while. There is currently no Directus integration.

### Login / Sign Up

We use a passwordless login system. When a user enters their email address they receive a code via email. Entering the code signs them in.\
There are several different ways for users to sign up and / or login:

- On the XBGE website, clicking "Mitmachen" will take a user to the Onboarding flow (see below)
- Entering an email adress to the Newsletter signup will trigger a Sign Up / Login. The idea behind this was to elegantly combine a newsletter opt in with an account creation.
- When downloading a list, a Sign Up / Login is triggered in the same way (see "List Download")

### Onboarding

The Onboarding flow in its current state was created during the preparation for the "Kommunale Kampagne" (see below). The idea behind it was to find out which city or town a user lives in, guide them through a series of steps (profile picture upload, donation CTA) and redirect them to their hometown's corresponding subpage.\
The Onboarding flow is still used like this on the XBGE website. On the Berlin website, a modified version is used that only shows the first step.

### Municipality pages ("Gemeindeseiten")

In 2020/2021 we worked on preparing what whe called the "Kommunale Kampagne". Citizens from cities and towns ("municipalities") all over Germany could sign up for their hometown and show their support. If enough people signed up for their municipality, it would qualify for the start of its own signature collection campaign. Every municipality needed its own subpage with information about how many people had signed up, and eventually, how many signatures had been collected already.\
So we needed a way to create thousands of subpages, so each municipality could be represented.

### Campaign Visualisation ("Unterschriften-Balken")

During an ongoing signature collection, we have the option of showing the number of collected signatures visually as a progress bar. The data for this is taken from the backend, but can be modified in the CMS. One (or several!) progress bars can be displayed on the website via Directus by using the corresponding campaign code. This component works hand in hand with the Signature Scan (see below).

### List Download

Users have to option of downloading the signature list as a PDF. To do this, they are prompted to enter their email adress so that an account gets created and they get added to the mailing list (see "Login / Sign Up" above). However, they also have the possibility of downloading a list anonymously.\
The downloaded lists will contain a generated barcode. This barcode is created once a day and stays the same for one day. This barcode is used for the Signature Scan (see below).\
The idea behind daily barcode generation was to track at what times during a campaign the most lists were downloaded and arrived at the office. However, in the future it might be more helpful to assign barcodes to individual users.

### Sign at Home User Journey

Downloading a list is the first step of the Sign at Home Journey, where users are prompted to print out their list at home, sign it, send it to the office via mail and then digitally add their signatures to the progress bar. Users are guided through this steps one by one, with a series of automated emails being triggered to remind them of each step. See UI/UX for more information on this.

### Signature Scan (Admin-Panel)

Anyone with access to the Admin Panel can scan the barcodes on the signatures using a barcode scanner. For each list / barcode, the user needs to enter the number of signatures on the list, and the numbers will be added together in the backend and be displayed on the Campaign Visualisation. This way, the website always shows the most up to date collection progress.

### Signature Self Scan

### Donation feature

### Profile

### Package Pledge

### Profile Tile

### Group Feature
