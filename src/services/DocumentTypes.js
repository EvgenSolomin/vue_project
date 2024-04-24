export const DocumentTypes = {
    
    async loadDocTypesList() {
        return await fetch('https://api.evrotrans.net/APIet/?command=type_doc')
    },
};