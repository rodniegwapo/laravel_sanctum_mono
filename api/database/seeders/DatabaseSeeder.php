<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\role;
use Psy\Util\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'role' => 'admin'
        ]);
        DB::table('roles')->insert([
            'role' => 'user'
        ]);
        DB::table('users')->insert([
            'firstname' => 'Rodnie',
            'lastname' => 'lecera',
            'email' => 'test@gmail.com',
            'role_id' => 1,
            'password' => bcrypt('password')
        ]);
        
    }
}
