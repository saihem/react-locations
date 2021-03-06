import React from 'react'
import { connect } from 'react-redux'
import { fetchCapitals } from '../../actions/capitalsActions'

@connect((store) => {
  return {
    capitals: store.capitals.capitals,
    fetching: store.capitals.fetching,
  }
})

export default class Capitals extends React.Component {
  constructor(props) {
     super(props)

     this.fetchCapitals = this.fetchCapitals.bind(this)
  }

  fetchCapitals(e) {
    this.props.dispatch(fetchCapitals(e.target.value))
  }

  render() {
    const { fetching, capitals } = this.props

    return <div id="content">

              <div class="pt100 bg-grad-mojito">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 pt50 text-center">
                      <h1 class="brand-heading font-montserrat text-uppercase color-light">Search a capital by name</h1>                            
                    </div>
                    <div class="col-md-8 col-md-offset-2 text-center">
                      <input type="text" onChange = {this.fetchCapitals} class="form-control input-circle input-lg no-border text-center"/>
                    </div>
                  </div>
                  <hr />
                  <div class="row text-center">
                    {fetching ? <h2>Loading...</h2>
                    : capitals.map(function(country){
                      return <div key={ country.name } class="col-md-6 col-sm-12 col-xs-12 mt30">
                                <div class="panel panel-default">
                                  <div class="panel-heading">
                                    <h3 class="panel-title"><span class={"flag-icon flag-icon-"+country.alpha2Code.toLowerCase()}></span> { country.capital }, { country.name }</h3>
                                  </div>
                                  <div class="panel-body">
                                    <div class="col-md-6 col-sm-12 col-xs-12 mt30">
                                      <h5>Region: { country.region }</h5>    
                                      <h5>Population: { country.population }</h5>    
                                      <h5>Native Name: { country.nativeName }</h5>   
                                    </div>  
                                    <div class="col-md-6 col-sm-12 col-xs-12 mt30">
                                      <h5>Demonym: { country.demonym }</h5>    
                                      <h5>Alpha2Code: { country.alpha2Code }</h5>    
                                      <h5>Alpha2Code: { country.alpha3Code }</h5>    
                                    </div>  
                                  </div>
                                </div>    
                              </div>
                      })
                      }
                  </div>  

                </div>
              </div>
                  

           </div> 

  }
}
