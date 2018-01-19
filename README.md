# fullstackvue2

After this recommended book at https://www.packtpub.com/application-development/full-stack-vuejs-2-and-laravel-5

## laravel setup after clone

```
echo "alias homestead='function __homestead() { (cd ~/entwicklung/Homestead && vagrant $*); unset -f __homestead; }; __homestead'" > ~/.bash_aliases
. ~/.bash_aliases

homestead up
homestead ssh
artisan key:generate
composer install
composer dump-autoload
CTRL+C
cd ~/Homestead
homestead provision
```

## laravel/artisan how-to

Load of commands best working :) after issueing `homestead ssh` followed by ` cd ~/code`.

## tinkering

```
artisan tinker // opens Psy Shell REPL

>>> $listing="abc"
=> "abc"
>>> echo $listing
abc⏎
>>> $listing='abc'
=> "abc"
>>> echo $listing
abc⏎

```

### db migration/seeding

```.sh-session
artisan migrate:fresh \\ drops and re-ups all migrations under ./database/migrations

artisan db:seed \\ re-runs SDatabaseSeeder
artisan db:seed --class=ListingsTableSeeder \\ re-runs only ListingsTableSeeder

artisan migrate:fresh --seed \\ combine re-creation of schemes with seeding
```

```.sh-session
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

### db tinkering
P.S. Should be MYSQL DDL
```
artisan tinker // opens Psy Shell REPL

>>> DB::select('DESCRIBE listings;'); // Describes Table listings

>>> DB::table('listings')->count();

>>> DB::table('listings')->get()->first();

>>> DB::select('show tables');
```

### eloquent tinkering

```
artisan make:model Listing // creates app/Listing.php

artisan tinker  // opens Psy Shell REPL

>>> \App\Listing::first(); // echoes first entity in listing

>>> \App\Listing::all(); // echoes all entities in listing

>>> foreach(\App\Listing::all() as $listing) { echo '['.$listing->id.'] '.$listing->address."\n"; } // echoes id and address for each entity in listing

// shows that type of attribute is casted as boolean
>>> $listing=\App\Listing::first();
>>> gettype($listing->amenity_wifi);
=> "boolean"
>>> $listing->amenity_wifi;
=> true
```
