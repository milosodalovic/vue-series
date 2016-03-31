


///////////////////////////////// video 8 i 9 iz serije tutorijala za vue 1.0 /////////////////////////////////////////////////////////
//Vue.component('tasks', {
//    template: '#tasks-template',
//
//    props: [ 'list','count'],
//
//    computed: {
//        remaining: function(){
//            return this.list.filter(this.inProgress).length;
//        }
//        //    var vm=this;
//        //
//        //    return this.list.filter(function(task){
//        //         return ! vm.isCompleted(task);
//        //    }).length;
//        //
//        //}
//    },
//
//    methods: {
//        isCompleted : function (task) {
//            return task.completed;
//        },
//        inProgress : function (task) {
//            return ! task.completed;
//        },
//
//        deleteTask: function(task){
//            this.list.$remove(task);
//        },
//
//        clearCompleted: function () {
//            this.list = this.list.filter(this.inProgress);
//        }
//    }
//
//
//})
//
//new Vue( {
//    el: '#container',
//
//    data: {
//        tasks: [
//            {body: 'Go to the school', completed: false},
//            {body: 'Finish homework', completed: false},
//            {body: 'Make google maps work', completed: true}
//        ]
//    }
//
//})
/////////////////////////////// video 7 iz serije tutorijala za vue 1.0 /////////////////////////////////////////////////////////
//new Vue({
//    el: '#container',
//
//    data: {
//        thing: '',
//
//        tasks : [
//            {body: 'Go to the school', completed: false},
//            {body: 'Finish homework', completed: false},
//            {body: 'Make google maps work', completed: true},
//        ]
//    },
//
//    methods: {
//        toggleCompletedFor: function(task) {
//            task.completed = ! task.completed;
//        }
//    }
//})

/////////////////////////////// video 6 iz serije tutorijala za vue 1.0 /////////////////////////////////////////////////////////
//new Vue({
//    el: '#container',
//
//    data: {
//        plans: [
//            { name: 'Pro', price: 100},
//            { name: 'Intermediate', price: 50},
//            { name: 'Free', price: 0}
//        ],
//
//        active: {}
//    },
//
//    components: {
//        plan: {
//            template: '#plan-template',
//
//            props: [ 'plan', 'active'],
//
//            computed: {
//                isUpgrade: function() {
//                    return this.plan.price > this.active.price;
//                }
//            },
//
//            methods: {
//                setActivePlan: function(){
//                    this.active = this.plan;
//                }
//            }
//        }
//    }
//
//})

/////////////////////////////// video 5 iz serije tutorijala za vue 1.0 /////////////////////////////////////////////////////////
//new Vue({
//    el: '#container',
//
//    data: {
//        points: 100,
//        skill: ''
//    },
//
//    computed: {
//        skill: function () {
//            if( this.points < 100) {
//                return 'Beginer'
//            }
//                return 'Advanced'
//        }
//    }
//})
/////////////////////////////// videi 2, 3, 4 iz serije tutorijala za vue 1.0 /////////////////////////////////////////////////////////
//Vue.component('counter', {
//
//    template:'#counter-template',
//
//    props: ['subject'],
//
//    data: function () {
//        return {
//            count: 0
//        }
//    }
//
//})
//
//new Vue({
//
//    el: '#container',
//
//    data: {
//        count: 0
//    }
//
//})


/////////////////////////////// google maps tutorijali (drugi)/////////////////////////////////////////////////////////
//
//Vue.component('map', {
//    template:'#map-template',
//
//    props: ['address'],
//
//    events: {
//        MapsApiLoaded: function() {
//            this.createMap();
//        }
//    },
//
//    watch: {
//        address: function(){
//            this.locateAddress();
//        }
//    },
//
//    methods: {
//        createMap: function(){
//            this.map = new google.maps.Map(this.$els.map, {
//                zoom: 14,
//            });
//
//            this.locateAddress();
//        },
//
//        locateAddress: function () {
//            var geocoder = new google.maps.Geocoder();
//            var vm = this;
//
//            geocoder.geocode({'address': this.address}, function(results, status) {
//                console.log(status, results);
//
//                if (status === google.maps.GeocoderStatus.OK) {
//                    vm.map.setCenter(results[0].geometry.location);
//                    return new google.maps.Marker({
//                        map: vm.map,
//                        position: results[0].geometry.location
//                    })
//                }
//                else {
//                    alert("Geocode was not successful for the following reason: " + status);
//                }
//            });
//        }
//    }
//})
//
//var app = new Vue({
//    el:'#maps',
//
//    data: {
//        address: ''
//    },
//
//    methods: {
//        init: function() {
//            this.$broadcast('MapsApiLoaded');
//        }
//    }
//})

/////////////////////////////// task list aplikacija /////////////////////////////////////////////////////////////
//
//new Vue ({
//
//    el: '#tasks',
//
//    data: {
//        tasks: [],
//
//        newTask:''
//
//    },
//
//    computed: {
//        completions: function() {
//            return this.tasks.filter(function (task) {
//                return task.completed;
//            });
//        },
//        remaining: function () {
//            return this.tasks.filter(function(task) {
//                return ! task.completed;
//            });
//
//        }
//    },
//
//    filters: {
//        inProcess: function (tasks) {
//            return tasks.filter(function (task) {
//                return ! task.completed;
//            });
//        }
//    },
//
//    methods: {
//        addTask: function(e) {
//            e.preventDefault();
//
//            if( ! this.newTask ) return;
//            this.tasks.push({
//                body: this.newTask,
//                completed: false
//            })
//
//            this.newTask = '';
//        },
//
//        removeTask: function(task) {
//            this.tasks.$remove(task)
//        },
//
//        editTask: function (task) {
//            this.removeTask(task);
//            this.newTask = task.body;
//            this.$els.newTask.focus();
//        },
//
//        toggleTaskCompletion: function(task) {
//            task.completed = ! task.completed;
//        },
//
//        completeAll: function () {
//            this.tasks.forEach(function(task) {
//                    task.completed = true;
//
//            });
//        },
//
//        clearCompleted: function() {
//            this.tasks = this.tasks.filter(function (task) {
//                return ! task.completed;
//            });
//        }
//    }
//
//})