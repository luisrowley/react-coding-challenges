import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export default class Discover extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      loggedIn: token ? true : false,
    };
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount() {
    this.getNewReleases();
    this.getFeaturedList();
    this.getCategories();
  }

  getNewReleases(){
    spotifyApi.getNewReleases()
      .then(
      // onfulfilled
      (response) => {
        this.setState({
          newReleases: response.albums.items
        });
      },
      // onrejected
      () => {
        this.setState({
          loggedIn: false
        });
      })
      // onerror
      .catch(err => console.error(err));
  }

  getFeaturedList(){
    spotifyApi.getFeaturedPlaylists()
      .then(
      // onfulfilled
      (response) => {
        this.setState({
          playlists: response.playlists.items
        });
      },
      // onrejected
      () => {
        this.setState({
          loggedIn: false
        });
      })
      // onerror
      .catch(err => console.error(err));
  }

  getCategories(){
    spotifyApi.getCategories()
      .then(
      // onfulfilled
      (response) => {
        this.setState({
          categories: response.categories.items
        });
      },
      // onrejected
      () => {
        this.setState({
          loggedIn: false
        });
      })
      // onerror
      .catch(err => console.error(err));
  }

  render() {
    const { newReleases, playlists, categories, loggedIn } = this.state;

    return (
    <div className="container">
      { !loggedIn ?
        <a href='http://localhost:8888'> Login to Spotify </a>
        :
        <div className="discover">
          <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
          <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
          <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
        </div>
      }
      </div>
    );
  }
}
