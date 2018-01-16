# fullstackvue2

After this recommended book at https://www.packtpub.com/application-development/full-stack-vuejs-2-and-laravel-5

## laravel/artisan how-to

Load of commands best working :) after issueing `homestead ssh` followed by ` cd~/code/Full-Stack-Vue.js-2-and-Laravel-5/vuebnb`.

```sh
artisan migrate:fresh \\ drops and re-ups all migrations under ./database/migrations

artisan db:seed \\ re-runs DatabaseSeeder
artisan db:seed --class=ListingsTableSeeder \\ re-runs only ListingsTableSeeder

artisan migrate:fresh --seed \\ combine re-creation of schemes with seeding
```

```sh
vagrant@homestead:~/code/Full-Stack-Vue.js-2-and-Laravel-5/vuebnb$ artisan migrate:fresh --seed
Dropped all tables successfully.
Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table
Migrating: 2014_10_12_100000_create_password_resets_table
Migrated:  2014_10_12_100000_create_password_resets_table
Migrating: 2018_01_16_204913_create_listings_table
Migrated:  2018_01_16_204913_create_listings_table
Seeding: ListingsTableSeeder
```
