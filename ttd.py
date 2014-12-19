#
# ttd class: thing to do 
#
# ao 28nov14

import db

def make_new_ttd(title):
    ttd = {
    'title' : title,
    'description' : None,
    'sub_things' : [],
    'related_things' : [],
    'parent_thing' : None,
    'done_criteria' : None,
    'due_date' : None,
    'repeat_type' : None,
    'prerequisite_things' : [],
    'responsible_person' : None,
    'team' : [],
    'watchers' : [],
    'ignorers' : [],
    'status' : None,
    'open_questions' : [],
    'comments' : [],
    'data' : None }
    db.put_ttd(ttd)

def find_ttd(criteria):
    return db.find_ttd(criteria)
    
def update_ttd(the_ttd, new_val_dict):
    t = find_ttd({"_id":the_ttd["_id"]})
    if t is None or t.count() != 1:
        raise LookupError('TTD not found')
    t = t[0]
    for k in new_val_dict.keys():
        the_ttd[k]=new_val_dict[k]
    db.put_ttd(the_ttd)