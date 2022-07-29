/*
You work at a lock situated on a very busy canal. Boats have queued up at both sides of the lock and your managers are asking for an update on how long it's going to take for all the boats to go through the lock.

Boats are queuing in order and they must go into the lock in that order. Multiple boats can go into the lock at the same time, however they must not exceed the length of the lock. The lock starts empty, and the timer should finish when the lock is down at empty, and all the boats are through. A boat takes its length in minutes to both enter and exit the lock, e.g. a boat of length 4 will take 4 minutes to enter and 4 minutes to leave the lock.
Notes

    The lock takes 2 minutes to fill and empty each time
    The lock should start and finish at the low end
    No boat will ever be longer than the lock
    The time should be returned in minutes

Example:

low queue  = [2, 3, 6, 1]
high queue = [1, 2]
max length = 7

    Starting at low end
        Boats 2 and 3 can fit inside the lock - total time is 5 minutes
        The lock fills up - total time is 7 minutes
        Boats 2 and 3 leave the lock - total time is 12 minutes
    Starting at high end
        Boats 1 and 2 enter the lock - total time is 15 minutes
        The lock empties - total time is 17 minutes
        Boats 1 and 2 leave the lock - total time is 20 minutes
    Starting at low end
        Boats 6 and 1 enter the lock - total time is 27 minutes
        The lock fills up - total time is 29 minutes
        Boats 6 and 1 leave the lock - total time is 36 minutes
    Starting at high end
        The lock empties as it must finish empty - total time is 38 minutes
*/

//My solution
function canalMania(lowQueue, highQueue, lockLength) {
  let time = 0;
  while(lowQueue.length !== 0 || highQueue.length !== 0){
  let below = 0;
  let above = 0;
  while(lowQueue.length > 0 && below + lowQueue[0] <= lockLength){
    below += lowQueue.shift();
  }
  time += (below*2)+2
  while(highQueue.length > 0 && above + highQueue[0] <= lockLength){
    above += highQueue.shift();
  }
  time += (above*2)+2
  }
  return time;
}
