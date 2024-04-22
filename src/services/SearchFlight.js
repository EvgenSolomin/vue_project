export const SearchFlights = {

    async getAllFrom(){
        const res = await fetch("https://partnerstickets.evrotrans.net/data/allfrom", {
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
                    // 'Cookie': 'Cookie (en-US)',
            },
        });
        const fromStations = await res.json();
        return fromStations.result
        // https://partnerstickets.evrotrans.net/data/allfrom
    },
    async getAllTo(){
        const res = await fetch("https://partnerstickets.evrotrans.net/data/allto", {
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
                    // 'Cookie': 'Cookie (en-US)',
            },
        });
        const toStations = await res.json();
        return toStations.result
        // https://partnerstickets.evrotrans.net/data/allto
    },
    async getAllFlight(fromId,toId,dateArival) {

        const res = await fetch('https://partnerstickets.evrotrans.net/search?from=' + fromId + '&to=' + toId + '&date=' + dateArival, {
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                        // 'Cookie': 'Cookie (en-US)',
                },
            })
            .then(async(result) => {
                const allFlights = await result.json()
                if ((allFlights.error === '0' ) && allFlights.result !== null) {
                   return allFlights.result
                }
                
                return []
                
            })
            .catch((error) => {
                console.log(error)
                return []
            })

            return res

    },

};
