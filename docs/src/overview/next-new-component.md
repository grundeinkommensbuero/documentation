# How to add a new section element

## In Directus

- Settings > Data Model
- Create new Data Model:

  - Duplicate fields from an existing Model:
  - Id, status, sort, user_created etc. will be created automatically, tick the boxes
  - Create all additional fields that you need for your element

- Go to the Data Model for the Sections Component. There, you need to change the settings so that your new Section Element can be added to a Section Component.
- Go to Permissions (Public) and make sure, that read permissions are allowed for all newly created elements
- Create your content

## In the code:

- Create a react component
- TBD: Do some magic in "getPageProps.ts" (utils)
- Include your component in the Sections Component:
  - Typing: At the top: "export type SectionsX = SectionElementBase &"
  - Include the component in the Switch statement, where all the others are
