import React from 'react'
import {create} from 'react-test-renderer'
import ProfileInfoHooks from './ProfileInfo'

describe('Status render', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileInfoHooks status = "hey hey"/>);
        const instance = component.getInstance();
        console.log(instance)
        expect(instance.state.status).toBe("hey hey")
    })
})