To verify the build process and ensure that all files are updated with the latest content, you can manually run these commands in the root directory of the project:

```sh
# Type check - no hardcoded copy objects found in routes/components
npx tsc --noEmit

# Build passes, locale persistences occur on localStorage `cys-locale`
npm run build
```

After running these commands, you can manually verify that the translated sections of the project are displayed correctly:

- Open Solution section in navigation bar: switch to ES or EN locale and navigate to Solutions section.
- Reload page: refresh the webpage. The translation should appear correctly.
- Contact form: submit a form with empty fields. Error messages should appear in the corresponding sections of the translated pages.

Note that manual verification is not a substitute for regular automated testing and may reveal issues that can be addressed by CI pipelines.
