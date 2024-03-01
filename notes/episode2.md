# Points to Remember

## What is npm ? 
- npm is a package manager 
- It is anything but not a node package manager as per docs [npm](https://www.npmjs.com/)
- Its like library/warehouse for all the packages/libaries where a developer can download
- use can simply use ***npm install package-name*** command to install
- But to enable npm for your repo you need to use ***npm init** command 
    - It will ask multiple Question following your response , it will create package.json
    - when you hit ***npm install*** first it will use package.json for getting the package info

## Details About Package.json !
- Package.json is configurations for npm
- The packages contains dependencies. Most important dependencies in React is Bundler(WebPack, Parcel)
- There are two types dependencies 
    - dev Dependencies 
        - These will only used in development.
        - It makes developer life easy.
        - use this command ***npm i -D packagename*** for installing packages in dev dependecies
    - normal Dependencies
        - These are actual libaries which will used for application purpose
- ^1.3.2 means it will update all the minor versions  coming in future . Example 1.3.2 --> 1.3.4
- ~1.3.2 means it will update all the major version coming in future. Example 1.3.4 --> 2.0.2

## What does package lock json do..?
- Package-lock.json do the follwoing
    - ***keeps the extract version of the dependenies***
    - ***it uses integrity key to compare and match  to check extarct version is getting deployed or not in production***
    - If I have package-lock.json I can recreate my node modules with extract versions
    - ***We must save or store package-lock.json in git hub***

## What is Node Modules ?
- ***node modules is like a database for npm which contains actual code of the all the transitive dependencies***
- Transitive dependecies means dependecies conatins dependencies contain dependencies so on.
- node modules is heavy so we shouldn't keep in git , we use .gitignore to ignore the folder
- If I have package-lock.json I can recreate my node modules with extract versions
- ***npx is to execute the package , npm is used to install the package***
- ***using CDN link for using react is not a good way, So always use npm***
- ***How to create production build..?***
    - npx parcel build  index.html

## What is Browser list ?
- Its a library used for generating production build to eradicate cross browser compatiblity
- Adding browsers List to the package json - https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

## Bundler do following things [We are using Parcel for this project - READ](https://parceljs.org/)
- chunking
- minification
- caching  for faster builds
- Bundling all the files
- uglify all the files
- Code Splitting
- creating local server
- File watching alogrithm in c++
- caching things for you - Faster build for better developer experience
- Image optimization
- Consistent Hashing
- Differential Bundling
- Diagnostics
- Error Handling
- hot module replacement
- Different prod and dev build