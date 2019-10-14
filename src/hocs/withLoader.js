import React from 'react';

const withLoader = (WrappedComponent) => {
    return class WithLoader extends React.Component {
        render() {
            const { data } = this.props;

            return data ? <WrappedComponent {...this.props} /> : <div>Loading...</div>;
        }
    }
}

export default withLoader;