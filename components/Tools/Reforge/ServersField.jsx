


function ServersField(props) {
    const {onChange, servers, defaultValue} = props
    return (
        <>  
            {servers.length > 1 && (
                <>
                    <label>Server</label>
                    <select name="server" className="form-control form-select select-field" onChange={onChange} defaultValue={defaultValue}>
                        {
                            servers.map((server,i) => (
                                <option key={i} value={server.value}>{server.content}</option>
                            ))   
                        }
                    </select>
                </>
            )}
        </>
    )
}


export default ServersField