#
# database stuff
#
# ao 28nov14
#

import pymongo

mongo_client = None
ttd_db = None

def startup():
    global mongo_client, ttd_db
    mongo_client = pymongo.MongoClient('localhost', 27017)
    ttd_db = mongo_client.ttds

def put_ttd(ttd):
    global ttd_db
    if '_id' in ttd.keys():
        ttd_db.ttds.update({'_id':ttd['_id']}, ttd)
    else:
        ttd_db.ttds.insert(ttd)
            
def find_ttd(criteria):
    global ttd_db
    return ttd_db.ttds.find(criteria)

if mongo_client is None:
    startup()