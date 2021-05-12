<script>
    import Header from "../lib/Header.svelte";
    import ExpandingCard from "../lib/ExpandingCard.svelte";

    let topics = [
        {
            title: 'What do I need', panels: [
                {title: 'Lorem ipsum dolor sit amet? 1', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 2', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 3', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 4', text: 'lorem ipsum dolor sit amet...'},
            ],
        },

        {
            title: 'Buying and Selling', panels: [
                {title: 'Lorem ipsum dolor sit amet? 5', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 6', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 7', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 8', text: 'lorem ipsum dolor sit amet...'},
            ],
        },

        {
            title: 'What are Buffs?', panels: [
                {title: 'Lorem ipsum dolor sit amet? 9', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 10', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 11', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 12', text: 'lorem ipsum dolor sit amet...'},
            ],
        },

        {
            title: 'Community', panels: [
                {title: 'Lorem ipsum dolor sit amet? 13', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 14', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 15', text: 'lorem ipsum dolor sit amet...'},
                {title: 'Lorem ipsum dolor sit amet? 16', text: 'lorem ipsum dolor sit amet...'},
            ],
        }
    ]
</script>

<Header>Frequently Asked Questions</Header>

<div class="grid">
    <h3 class="col-12">Topics</h3>

    {#each topics as topic}
        <div class="col-12">
            <h5 class="m-t-s m-b-xs">{topic.title}</h5>
            <ExpandingCard panel="{topic.panels}" />
        </div>
    {/each}

    <!--<div class="col-12">
        <h6 class="m-b-s">What do I need?</h6>
    </div>

    <div class="col-12">
        <h6 class="m-b-s">Buying and Selling</h6>
    </div>

    <div class="col-12">
        <h6 class="m-b-s">What are buffs?</h6>
    </div>

    <div class="col-12">
        <h6 class="m-b-s">Community</h6>
    </div>-->
</div>
