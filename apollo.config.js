module.exports = {
    client: {
        includes: ["./src/apollo/**/*.ts"],
        service: {
            name: "mzawadie",
            localSchemaFile: ["schema.graphql", "local-schema.graphql"],
            // url: "http://localhost:8000/graphql/"
        },
    },
};
