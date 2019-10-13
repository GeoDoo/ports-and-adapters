import React from 'react';

const withLoader = (WrappedComponent) => {
    return class WithLoader extends React.Component {
        isAlreadyMounted = false;

        state = {
            isLoading: true,
            data: []
        };

        async componentDidMount() {
            const { callback } = this.props;

            this.isAlreadyMounted = true;

            try {
                const { data } = await callback();

                if (this.isAlreadyMounted) {
                    this.setState({ isLoading: false, data });
                }
            } catch (e) {
                throw e;
            }
        }

        componentWillUnmount() {
            this.isAlreadyMounted = false;
        }

        render() {
            const { isLoading, data } = this.state;

            return isLoading ? <div>Loading...</div> : <WrappedComponent data={data} />;
        }
    }
}

export default withLoader;