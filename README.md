# Add Daon To Project
Added the Daon Package to the Project by creating a module directory at the root 
of the project and referenced in your package.json file using a relative path:

```json
{
  "dependencies": {
    "daon_sdk_react_native": "file:./module/daon_sdk_react_native"
  }
}
```

# Link the Native Module:
Ran the link command in the command line as follows
```sh
   yarn link ./module/daon_sdk_react_native
```

# Update the Android Module
Update the android settings.gradle or settings.gradle.kts:
In your main React Native project, update the settings.gradle 
(or settings.gradle.kts if using Kotlin DSL) file to include the local package. 
Make sure the path is relative to your root project directory.
Add the following lines:

```groovy
   include ':daon_sdk_react_native'
   project(':daon_sdk_react_native').projectDir = new File(rootProject.projectDir, '../module/daon_sdk_react_native/android')
```

# Update build.gradle:
In your app-level build.gradle file (usually located at android/app/build.gradle), add the local package as a dependency:

```groovy
   dependencies {
      implementation project(':daon_sdk_react_native')
      // Other dependencies
   }
```
# Clean and Rebuild the Project:
After making these changes, clean and rebuild your project to ensure the changes take effect:

```sh
   bash
   Copy code
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
```

# Additional Steps:
Sometimes, changes in Gradle files require a re-sync. If you're using Android Studio, you can do this by clicking "Sync Project with Gradle Files."
