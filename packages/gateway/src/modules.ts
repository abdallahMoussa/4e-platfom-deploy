

export const modules = [
    { name: "@4eplatform/controlpanel-usermanagement", path: "/controlpanel/users/*" },
    // other modules...
];


// export const installModules = () => {
    
//     modules.forEach((module) => {
//         try {
//             console.log(`Installing ${module.name}...`);
//             execSync(`npm install ${module.name}`, { stdio: 'inherit' });
//             console.log(`Successfully installed ${module.name}`);
//         } catch (error) {
//             console.error(`Error installing ${module.name}:`, error);
//         }
//     });
    
// }