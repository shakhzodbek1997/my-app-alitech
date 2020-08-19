// import React, {Component} from 'react';
// import Link from "../components/Link";
//
// class Sidebar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             number: 0,
//             data: [{name: 'George'}, {name: 'Tom'}],
//             role: {
//                 admin: true,
//                 isNew: false
//             }
//         }
//     }
//
//     clickHandler = () => {
//         console.log("Clicked");
//         this.setState({number: this.state.number + 1}, () => this.alertHandler())
//     }
//
//     alertHandler = () => {
//         const {number} = this.state;
//         if (number === 5){
//             alert('Number is 5')
//         }
//     }
//
//     clearHandler = () => {
//         this.setState({number: 0}); 
//     }
//
//     render() {
//         console.log(this.state.number );
//         const{title, data} = this.props;
//         const {number} = this.state;
//
//         return (
//             <div>
//                <h1>Today.uz</h1>
//                 <p>title: {title}</p>
//                 <p>name: {data.name}</p>
//                 <p>age: {data.age}</p>
//                 <button onClick={this.clickHandler}>Click me</button>
//                 <hr/>
//                 <Link data={{url: 'https://google.com', title: "Google link", isActive: true}}/>
//                 <section>
//                     <h1>Number: {number}</h1>
//                     <button onClick={this.clickHandler}>Update Number</button>
//                     <button onClick={this.clearHandler}>Clear</button>
//                 </section>
//             </div>
//         );
//     }
// }
//
// export default Sidebar;

import React, {Component} from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {user: {name: '', img: ''}, num: 0}   // boshlang'ich  state
        console.log("[Constructor]........");
    }
    componentDidMount() {
        console.log("[ComponentDidmount] is......");
        // fetch user data from database:  data = {name: '', img: ''}
        this.setState({user: {name: 'Eshqobil', img: 'image URL address here' }});
    }

    updateNumber = () =>  {
        if (this.state.num < 10){
            this.setState(oldState => {
                return{
                    num: oldState.num + 1
                }
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(this.state.num, nextState.num );

        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.num, this.state.num );
        if (prevState.num < this.state.num){
            console.log('Hi ')
        }
    }

    componentWillUnmount() {
        console.log('Unmouunting......')
    }

    render() {
        console.log("[Render] is........");
        // js jarayonlarini faqat render ichiga yozamiz
        const {num} = this.state
        return (
            <div>
                <h1>Hello React {num}</h1>
                <button onClick={this.updateNumber}>Update</button>
            </div>
        );
    }
}

export default Sidebar;
