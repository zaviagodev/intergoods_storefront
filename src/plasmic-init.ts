import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "i6Ksq8Zy9CPXYc1o5j1t1F",  // ID of a project you are using
            token: "AZIhU94l0ujXn19h7Pp36vp4NocVXXk2VXdyXgRkJBQ2thJDSdfFsr9lh8f18h1fqAnOuDcUOO3moMMK3kp7w"  // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true,
})