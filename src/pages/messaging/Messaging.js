import React from 'react'
import MessageList from '../../components/messaging/MessageList'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Read from '../messaging/read/Read'

function Messaging() {
    let { path } = useRouteMatch();
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-white w-full rounded-md shadow-md min-h-screen">
                            <MessageList />
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <Switch>
                            <Route path={`${path}/:id`} component={Read} exact />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messaging
