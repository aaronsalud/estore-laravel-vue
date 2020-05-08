<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class EstoreInstall extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'estore:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Initialize data for the EStore application';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if ($this->confirm('This will reset ALL your current data. Are you sure you want to proceed?')) {
            // Clear pre existing images in the storage folder
            File::deleteDirectory(public_path('storage/products/dummy'));

            $this->callSilent('storage:link');
            $copySuccessFul = File::copyDirectory(public_path('img/products'), public_path('storage/products/dummy'));

            if ($copySuccessFul) {
                $this->info('Images succesfully copied to the storage folder');
            }

            $this->call('migrate:fresh', [
                '--seed' => true,
            ]);

            DB::unprepared(file_get_contents(base_path('database/exports/voyager-export.sql')));

            $this->info('EStore app settings initialization complete');
        }
    }
}
