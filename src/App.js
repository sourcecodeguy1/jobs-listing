import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {

    const [jobs, setJobs] = useState([]);
    const [data, setData] = useState([]);

    const URL = "http://localhost:3000/data.json";

    useEffect(() => {
        axios.get(URL).then((response) => {
            setData(response.data);
            setJobs(response.data);
        });
    }, []);

    const [activeFilters, setActiveFilters] = useState([]);

    const filterJobs = jobsFilter => {
        if (jobsFilter.length === 0) {
            return;
        }

        const filteredJobs = data.filter(job => {
            const tags = [...job.languages, ...job.tools, job.role, job.level];
            return jobsFilter.every(term => tags.includes(term));
        });
        setJobs(filteredJobs);
    };

    const handleRemove = filter => {
        if (activeFilters.length === 1) {
            setActiveFilters([]);
            setJobs(data);
        } else {
            setActiveFilters(prevState =>
                prevState.filter(item => item !== filter)
            );
        }
    };

    const clearFilters = () => {
        setActiveFilters([]);
        setJobs(data);
    };

    useEffect(() => {
        filterJobs(activeFilters);
        console.log("active filters " + activeFilters);
    }, [activeFilters]);

    return (
        <div className="App">
            <Header />
            {activeFilters.length !== 0 && (
                <FilterBar
                    activeFilters={activeFilters}
                    remove={handleRemove}
                    removeFilters={clearFilters}
                />
            )}
            {
                jobs.map((job, index) =>(
                    <Card
                        key={index}
                        job={job}
                        filterJobs={filterJobs}
                        setActiveFilters={setActiveFilters}
                        activeFilters={activeFilters}
                    />
                ))}
            <br />
        </div>
    );
}

export default App;
