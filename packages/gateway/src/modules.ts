
export const modules = [
    { name: "@ncvc/cpanel", path: "/cpanel/*" },
    { name: "@ncvc/users", path: "/users/*" },
    // { name: "@ncvc/contracts", path: "/contracts/*" },
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