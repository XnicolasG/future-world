import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <nav>navegación</nav>
            {children}
        </main>
    )
}

export default layout