# Points to Remember
- Please remove main property frin package json
1. Package.json is configurations for npm
2. The packages contains dependencies. Most important dependencies in React is Bundler(WebPack, Parcel)
3. Bundler do following things (We are using Parcel for this project - https://parceljs.org/)
    - chunking
    - minification
    - Bundling all the files
    - uglify all the files
    - Code Splitting
    - creating local server
    - File watching alogrithm in c++
    - caching things for you - Faster build for better developer experience
    - IMage optimization
    - Consistent Hashing
    - Differential Bundling
    - Diagnostics
    - Erro Handling
    - hot module replacement
    - Different prod and dev build
4. There are two types dependencies 
    - dev Dependencies
    - normal Dependencies
5. ^1.3.2 means it will update all the minor versions  coming in future . Example 1.3.2 --> 1.3.4
6. ~1.3.2 means it will update all the major version coming in future. Example 1.3.4 --> 2.0.2
7. Package-lock.json do the follwoing
        - keeps the extract version of the dependenies
        - it uses integrity key to compare and match  to check extarct version is getting deployed or not in production
8. node modules is like a database for npm which contains actual code of the all the transitive dependencies
9. Transitive dependecies means dependecies conatins dependencies contain dependencies so on.
10. node modules is heavy so we should keep in git , we use .gitignore to ignore the folder
11. If I have package-lock.json i can recreate my node modules with extract versions
12. npx is to execute the package , npm is used to install the package
13. using CDN link for using react is not a good way , So always use npm
14. How to create production build -> npx parcel build  index.html
15. Adding browsers List to the package json - https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z