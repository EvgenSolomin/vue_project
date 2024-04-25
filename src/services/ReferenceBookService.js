export const ReferenceBookService = {
    
    async loadNationalityList() {
        return await fetch('https://api.evrotrans.net/APIet/?command=nationality')
    },

    async loadDocTypesList() {
        return await fetch('https://api.evrotrans.net/APIet/?command=type_doc')
    }
};
