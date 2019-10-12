import React from 'react';

const withLoader = (WrappedComponent) => {
    return class WithLoader extends React.Component {
        state = {
            isLoading: true,
            data: []
        };

        async componentDidMount() {
            const { callback } = this.props;

            try {
                const { data } = await callback();

                this.setState({ isLoading: false, data });
            } catch (e) {
                throw e;
            }
        }

        render() {
            const { isLoading, data } = this.state;

            return isLoading ? <div>Loading...</div> : <WrappedComponent data={data} />;
        }
    }
}

export default withLoader;