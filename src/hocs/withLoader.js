import React from 'react';

const withLoader = (WrappedComponent) => {
    return class WithLoader extends React.Component {
        state = {
            isLoading: true,
            data: {},
        };

        async componentDidMount() {
            const { callback } = this.props;

            try {
                const data = await callback();
                
                setTimeout(() => {
                    this.setState({ isLoading: false, data });
                }, 1000);
            } catch (e) {
                throw e;
            }
        }

        render() {
            const { isLoading, data } = this.state;

            return isLoading ? <div>Loading...</div> : <WrappedComponent {...this.props} data={data} />;
        }
    }
}

export default withLoader;