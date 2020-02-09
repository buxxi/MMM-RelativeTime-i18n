# MMM-RelativeTime-i18n
[Magic Mirror](https://magicmirror.builders/) Module - A module for Magic Mirror that overrides the relative time for moment.js-usage in all other modules 

## Install
1. Clone repository into ``../modules/`` inside your MagicMirror folder.
2. Add the module to the Magic Mirror config.
```
{
  module: "MMM-RelativeTime",
  config: {
    en-gb: {
      yy: "%d earth spins"
    }
  }
},
```
3. Done! (this would cause any module that would display 4 years as "4 earth spins")

## Configuration parameters
- ``{locale}`` : The root-object in the config should be a valid locale name, which should contain an object with the following optional parameters:
  - ``future``: text for future time, %s will be replaced with the time
  - ``past``: text for past time, %s will be replaced with the time
  - ``s``: text for 'a few seconds'
  - ``ss``: text for seconds, %d will be replaced with the amount of seconds
  - ``m``: text for one minute
  - ``mm``: text for minutes, %d will be replaced with the amount of minutes
  - ``h``: text for one hour
  - ``hh``: text for hours, %d will be replaced with the amount of hours
  - ``d``: text for one day
  - ``dd``: text for days, %d will be replaced with the amount of days
  - ``M``: text for one month
  - ``MM``: text for months, %d will be replaced with the amount of months
  - ``y``: text for one year
  - ``yy``: text for years, %d will be replaced with the amount of years
