import { findComponent } from "../store";
import { on } from '@/events'

on('commit.prepare', ({ component }) => {
    // Ensure that all child components with reactive props (even deeply nested)
    // are included in the network request...
    Livewire.all().forEach(i => {
        i.$wire.$commit()
    })
    getChildrenRecursively(component, child => {
        let childMeta = child.snapshot.memo
        let props = childMeta.props

        // If this child has a prop from the parent
        // if (props) child.$wire.$commit()
    })
})

function getChildrenRecursively(component, callback) {
    component.children.forEach(child => {
        callback(child)

        getChildrenRecursively(child, callback)
    })
}
