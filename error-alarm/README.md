## Solution

For this problem i would use a caching library where each key represents an error. The value corresponding to this error would be an object that stores the number of ocurrencies and a flag that indicates if a notification was sent or not. The TTL (Time To Live) of this entry would be 60 seconds as requested. Whenever an error occurs, we first check if the error exists in the cache and increment its ocurrencies or create it if it didnt already exist. When the number of ocurrencies reaches 10 we send a notification and set the notification flag to true.

``` js
const NodeCache = require( "node-cache" );
const errorsCache = new NodeCache();

const TTL_SECONDS = 60;
const OCURRENCIES_TRESHHOLD = 10;

function logError(error) {
    const foundError = errorsCache.get(JSON.stringify(error))

    if (!foundError) {
        const errorObject = { ocurrencies: 1, notification_sent: false };
        errorsCache.set(JSON.stringify(error), errorObject, TTL_SECONDS);
    } else {
        const updatedErrorObject = {
            occurrencies: foundError.ocurrencies + 1,
            notification_sent: foundError.notification_sent,
        };

        if (updatedErrorObject.ocurrencies > OCURRENCIES_TRESHHOLD && 
        updatedErrorObject.notification_sent === false) {
            sendNotification();
            updatedErrorObject.notification_sent = true;
            const remainingTtl = errorsCache.getTtl(JSON.stringify(error));
            errorsCache.set(JSON.stringify(error), updatedErrorObject, remianingTtl);
        }
    }

    // Append error to txt file
}
```