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

<Header grid="small">Frequently Asked Questions</Header>

<div class="grid-small">
    <h3 class="col-12">Topics</h3>

    {#each topics as topic}
        <div class="col-12">
            <h5 class="m-t-s m-b-xs">{topic.title}</h5>
            <ExpandingCard panel="{topic.panels}" />
        </div>
    {/each}
</div>
