interface UV {
  County: string;
  PublishAgency: string;
  PublishTime: string;
  SiteName: string;
  UVI: string;
  WGS84Lat: string;
  WGS84Lon: string;
}

export class UVModel {
  private raw: UV;

  county: string;
  siteName: string;
  lat: string;
  lon: string;

  constructor(data: UV) {
    this.raw = data;

    this.county = data.County;
    this.siteName = data.SiteName;

    this.lat = data.WGS84Lat;
    this.lon = data.WGS84Lon;
  }

  openGoogleMap() {
    let lat = this.convertDD(this.lat);
    let lon = this.convertDD(this.lon);

    window.open(`http://maps.google.com/?q=${lat},${lon}`, "_blank");
  }
  convertDD(data) {
    const [degrees, minutes, seconds] = data.split(",");

    return (
      parseFloat(degrees) +
      parseFloat(minutes) / 60 +
      parseFloat(seconds) / 3600
    );
  }

  get dd_lat() {
    return this.convertDD(this.lat);
  }
  get dd_lon() {
    return this.convertDD(this.lon);
  }
}
