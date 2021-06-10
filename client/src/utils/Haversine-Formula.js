// //GSO Coordinates in Radians
// let theta1 = 0.6296;
// let lambda1 = -1.3926;

// //CHI Coordinates in Radians
// let theta2 = 0.7309;
// let lambda2 = -1.5294;

// //Earth Radius in Meters
// let r = 6.371*(10**6);

// //Stuff to make my life easier
// //sin^2
// let sinsquaredtheta = (Math.sin(( theta2-theta1 ) / 2 )) * (Math.sin(( theta2 - theta1 ) / 2 ));
// let sinsquaredlambda = (Math.sin(( lambda2 - lambda1 ) / 2 )) * (Math.sin(( lambda2 - lambda1 ) / 2 ));



// let thetasquare = (Math.sin(( theta2-theta1 ) / 2 )) ** 2


// console.log(sinsquaredtheta, thetasquare);

// //Actual Calculation
// let d;
// d = (2*r)*(Math.asin(Math.sqrt(sinsquaredtheta + (Math.cos(theta1)*Math.cos(theta2)*sinsquaredlambda))));

// // console.log('Distance in Meters: ', d);
// // console.log('Distance in Miles: ', d / 1609);





const haversine = (IPLat, IPLong, OWLat, OWLong) => {



    // console.log(IPLat, IPLong, OWLat, OWLong);

    //IPIFY Coordinates in Radians
    let thetaIP = (IPLat) * (Math.PI / 180)
    let lambdaIP = (IPLong) * (Math.PI / 180)

    //OpenWeather Coordinates in Radians
    let thetaOW = (OWLat) * (Math.PI / 180)
    let lambdaOW = (OWLong) * (Math.PI / 180)

    //Earth Radius in Meters
    let r = 6.371*(10**6);

    //Sin^2 Stuff
    let sinsquaredtheta = (Math.sin(( thetaOW-thetaIP ) / 2 )) * (Math.sin(( thetaOW - thetaIP ) / 2 ));
    let sinsquaredlambda = (Math.sin(( lambdaOW - lambdaIP ) / 2 )) * (Math.sin(( lambdaOW - lambdaIP ) / 2 ));

    //Calculation in Meters
    let d = (2*r)*(Math.asin(Math.sqrt(sinsquaredtheta + (Math.cos(thetaIP)*Math.cos(thetaOW)*sinsquaredlambda))));

    //Convert to Miles
    let miles = d / 1609;

    // console.log(miles);

    return +miles.toFixed(2);
}

module.exports = haversine;