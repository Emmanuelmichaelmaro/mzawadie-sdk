module.exports = {
    client: {
        includes: ["./src/queries/*.ts", "./src/mutations/*.ts", "./src/fragments/*.ts"],
        service: {
            name: "mzawadie",
            localSchemaFile: "schema.graphql",
            // url: "http://localhost:8000/graphql/"
        },
    },
};
