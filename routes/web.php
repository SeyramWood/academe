<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::inertia('/', 'Welcome');
Route::get('/', 'WelcomeController@index');
Route::get('/dashboard', 'DashboardController@index');
Route::get('/dashboard/programmes-and-courses', 'DashboardController@programmesAndCourses');
Route::get('/dashboard/manage-programmes', 'DashboardController@manageProgrammes')->name('manage.programmes');
Route::get('/dashboard/manage-courses', 'DashboardController@manageCourses')->name('manage.courses');
Route::get('/dashboard/upload-lecture', 'DashboardController@manageLectures');

/** Programme Routes */
Route::get('/dashboard/get-programmes', 'ProgrammeController@getProgrammes');
Route::post('/dashboard/create-programme', 'ProgrammeController@addNewProgramme');
Route::put('/dashboard/update-programme', 'ProgrammeController@editProgramme');
Route::delete('/dashboard/delete-programme/{programme}', 'ProgrammeController@deleteProgramme');
Route::delete('/dashboard/delete-programmes/{programmes}', 'ProgrammeController@deleteProgrammes');
Route::post('/dashboard/upload', 'ProgrammeController@upLoad');

/** Course Routes */
Route::get('/dashboard/get-courses/{key}', 'CourseController@getCourses');
Route::post('/dashboard/create-course', 'CourseController@addNewCourse');
Route::put('/dashboard/update-course', 'CourseController@editCourse');
Route::delete('/dashboard/delete-course/{course}', 'CourseController@deleteCourse');
Route::delete('/dashboard/delete-courses/{courses}', 'CourseController@deleteCourses');

/**Lectures Routes */
