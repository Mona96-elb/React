import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../services/music-group-service';

export function ReadWebApiFunc06() {
  const [wapiInfo, setWapiInfo] = useState();


  useEffect(() => {
      //equvalent to componentDidMount

      //package the async in an async iffy
      //Immediately-Invoked Function Expressions (IIFE), pronounced "iffy"
      //(async () => {})()
      (async () => {
        console.log('componentDidMount');
        
        const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
        const info = await service.readInfoAsync();
        setWapiInfo(info);
      })();
    }
  , []);

  return (
    <div>
      <h1>WebApi info</h1>
      <p>
        <ul>
          <li>nrSeededMusicGroups: {wapiInfo?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {wapiInfo?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {wapiInfo?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {wapiInfo?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {wapiInfo?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {wapiInfo?.nrUnseededArtists} </li>
        </ul>
      </p>
    </div>
  );
}


export class ReadWebApiClass06 extends Component {
  constructor(props) {
    super(props);          //Needs to be the 1st call

    //states, in class component, initialized, here with an empty object
    this.state = {wapiInfo: {}}
  }

  
  componentDidMount() {
    console.log('componentDidMount');

    //package the async in an async iffy
    //Immediately-Invoked Function Expressions (IIFE), pronounced "iffy"
    //(async () => {})()
    (async () => {
      console.log('componentDidMount');
      
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const info = await service.readInfoAsync();
      this.setState({wapiInfo: info});
    })();
  }

  render() {
    return (
      <div>
      <h1>WebApi info</h1>
      <p>
        <ul>
          <li>nrSeededMusicGroups: {this.state.wapiInfo?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {this.state.wapiInfo?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {this.state.wapiInfo?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {this.state.wapiInfo?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {this.state.wapiInfo?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {this.state.wapiInfo?.nrUnseededArtists} </li>
        </ul>
      </p>
    </div>
    )
  }
}
