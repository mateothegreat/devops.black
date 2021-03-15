---
title: The Security Component
sidebar_label: Security
---


> Security shifts left and development shifts right.

## Checklist

* Default DENY
* 


#### Authentication

* Use HTTP POST to transmit authentication credentials.
* Authentication failure responses should **not** indicate which part of the authentication data was incorrect. For example, instead of "Invalid username" or "Invalid password", just use "Invalid username and/or password" for both.
* Implement Multi-Factor Authentication when possible ("2FA").

#### Data

* Do not include sensitive information in the query string.
* Disable caching for endpoints that respond with sensitive information (i.e.: `Cache-Control: no-store`).

#### Logging

#### Error Handling

* Use generic messages when returned to the caller.


## See also

* [OWASP Proactive Controls](https://owasp.org/www-project-proactive-controls)
* https://github.com/TaptuIT/awesome-devsecops
