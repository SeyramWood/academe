<?php

use Illuminate\Support\Facades\Auth;
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
// Route::middleware(['guest', 'guest:faculty'])->group(function () {
// });
Route::get('/', 'Auth\RegisterController@index')->name('account');
Route::post('/create-account', 'Auth\RegisterController@createAccount');
Route::post('/signin', 'Auth\LoginController@signIn');
Route::post('/logout', 'Auth\LogoutController@signOut');
Route::prefix('dashboard')->group(function () {
  Route::get('/', 'DashboardController@index');
  Route::get('/programmes-and-courses', 'DashboardController@programmesAndCourses');
  Route::get('/manage-programmes', 'DashboardController@manageProgrammes')->name('manage.programmes');
  Route::get('/manage-courses', 'DashboardController@manageCourses')->name('manage.courses');
  Route::get('/upload-lecture', 'DashboardController@manageLectures')->name('manage.lectures');

  /** Programme Routes */
  Route::get('/get-programmes', 'ProgrammeController@getProgrammes');
  Route::post('/create-programme', 'ProgrammeController@addNewProgramme');
  Route::put('/update-programme', 'ProgrammeController@editProgramme');
  Route::delete('/delete-programme/{programme}', 'ProgrammeController@deleteProgramme');
  Route::delete('/delete-programmes/{programmes}', 'ProgrammeController@deleteProgrammes');
  Route::post('/upload/{location?}', 'VideoUploadController@upLoad');

  /** Course Routes */
  Route::get('/get-courses/{key}', 'CourseController@getCourses');
  Route::post('/create-course', 'CourseController@addNewCourse');
  Route::put('/update-course', 'CourseController@editCourse');
  Route::delete('/delete-course/{course}', 'CourseController@deleteCourse');
  Route::delete('/delete-courses/{courses}', 'CourseController@deleteCourses');

  /**Lectures Routes */
  Route::post('/create-lecture', 'LectureController@addNewLecture');
  /**Profile Routes */
  Route::get('/profile', 'LecturerController@profile')->name('faculty.profile');
});

Route::prefix('dashboard/student')->group(function () {
  Route::get('/', 'StudentController@index')->name('student.home');
  Route::get('/lectures', 'StudentController@lectures')->name('student.lectures');
  Route::get('/courses', 'StudentController@courses')->name('student.courses');
  Route::get('/profile', 'StudentController@profile')->name('student.profile');
  Route::post('/register-course', 'StudentController@registerCourse')->name('student.registerCourses');
});

/**Video Padge Routes */

Route::middleware(['auth'])->group(function () {
  Route::get('/student/watch-video/{lecture:slug}', 'StudentVideoController@watchVideos');
});
Route::middleware(['auth:faculty'])->group(function () {
  Route::get('/watch-video/{lecture:slug}', 'VideoController@watchVideos');
});
Route::get('/get-lectures-by-course/{id}', 'VideoController@getLectureByCourse');
Route::put('/update-profile', 'ProfileController@editProfile');
Route::post('/update-profile-photo', 'ProfileController@editProfilePhoto');
