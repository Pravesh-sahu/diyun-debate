import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tree as D3Tree } from "react-d3-tree";
import { useParams } from "react-router-dom";

const CustomNode = ({ nodeData, ...props }) => {
  let fillColor = "blue"; // Default color for main title node

  if (nodeData.attributes && nodeData.attributes.side) {
    if (nodeData.attributes.side === "pro") {
      fillColor = "green"; // Color for pros
    } else if (nodeData.attributes.side === "con") {
      fillColor = "red"; // Color for cons
    }
  }

  return (
    <g>
      <circle r={10} fill={fillColor} />
      <text x="-10" y="5" fill="#fff" fontSize="12">
        {props.name}
      </text>
    </g>
  );
};

const DebateTree = () => {
  const [treeData, setTreeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchTreeData = async (id) => {
      try {
        const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${id}/displaydebate`;
        const responseData = await axios.get(url);
        const debateDetails = responseData?.data?.debate;

        const treeItem = {
          name: debateDetails.title,
          attributes: {},
          children: [],
        };

        if (debateDetails.pros && debateDetails.pros.length > 0) {
          debateDetails.pros.forEach((pro) => {
            treeItem.children.push({
              name: pro.title,
              attributes: {
                side: pro.side,
              },
              children: fetchTreeData(pro.id),
            });
          });
        }

        if (debateDetails.cons && debateDetails.cons.length > 0) {
          debateDetails.cons.forEach((con) => {
            treeItem.children.push({
              name: con.title,
              attributes: {
                side: con.side,
              },
              children: fetchTreeData(con.id),
            });
          });
        }

        return [treeItem];
      } catch (error) {
        console.error("Error fetching tree data:", error);
        throw new Error("Error fetching tree data");
      }
    };

    const fetchData = async () => {
      try {
        const treeData = await fetchTreeData(id);
        setTreeData({ name: "Root", attributes: {}, children: treeData });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <D3Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: 100, y: 100 }}
        collapsible={true}
        nodeSvgShape={{ shape: CustomNode }}
      />
    </div>
  );
};

export default DebateTree;
