# Web-Monitor

> Simply this monitor will allow a user (mostly me lol) to enter in a url (my clients) they want monitored. I will then reveive alerts when those sites go down or come up back

## Installation

OS X & Linux:

```sh
I will get back on this later
```

Windows:

```sh
I will get back on this later
```

## Goals

1. The API will listen on a PORT and accept incoming HTTP request for POST, GET, PUT, DELETE, and HEAD,
   - note for self: consider hosting on AWS S3
2. API allows a client to connect then create a new user, then edit and delete that user,
3. The API allows a user to sign in which will give them a token tht they can use for subsquent authenticated requests.

4. The API allows the user to sign out which will invalidate their token.

5. The API allows a signed-in user to use their token to create a new check.
   - allow the user to define what up is mabye not just (200)
6. The API allows a signed-in user to edit or delete any of their checks.
   - considering limiting number of checks
7. In the background, perform all the checks at the appropriate times, and send alerts to the users when a check changes its state from up to down, or visa versa.
8. Im going to try to not use Express to test myself.

## Things I am unsure of

- Decide how to send alerts - consider Mailgun for email
- How often to check if the site is up - considering ever 5 minutes
- Need to decide on a DB - for now going to write to the filesystem
