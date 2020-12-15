import React, { Component } from 'react'

class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
    }

    destroy() {
        this.props.onDestroy(this.props.product.id);
    }

    render () {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.category}</td>
                <td>{this.props.product.price}</td>
                <td>{(product.instock) ? "Yes" : "No"}</td>
				<td className="text-right">
					{/* <button onClick={this.edit} className="btn btn-warning mr-2">Edit</button> */}
					<td class="text-right"><button onClick={this.destroy} class="btn btn-info">Delete</button></td>
				</td>
                <td class="text-right"><button onClick={this.destroy} class="btn btn-info">Delete</button></td>
            </tr>
        )
    }
}

export default ProductRow